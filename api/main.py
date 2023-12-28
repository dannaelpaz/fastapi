from fastapi import FastAPI, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session

from fastapi.middleware.cors import CORSMiddleware

from models import Player
from database import engine, Base, get_db
from repositories import PlayerRepository
from schemas import PlayerRequest, PlayerResponse

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

# Rota raiz da API
@app.get("/")
def home():
    return {"Página Inicial da API"}

# Rota de Cadastro de player
@app.post("/api/players", response_model=PlayerResponse, status_code=status.HTTP_201_CREATED)
def create(request: PlayerRequest, db: Session = Depends(get_db)):
    player = PlayerRepository.save(db, Player(**request.dict()))
    return PlayerResponse.from_orm(player)

# Rota de listagem de players
@app.get("/api/players", response_model=list[PlayerResponse])
def find_all(db: Session = Depends(get_db)):
    players = PlayerRepository.find_all(db)
    return [PlayerResponse.from_orm(player) for player in players]

# Rota de busca de Player por id
@app.get("/api/players/{id}", response_model=PlayerResponse)
def find_by_id(id: int, db: Session = Depends(get_db)):
    player = PlayerRepository.find_by_id(db, id)
    if not player:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Player não encontrado"
        )
    return PlayerResponse.from_orm(player)

# Rota para excluir um player
@app.delete("/api/players/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_by_id(id: int, db: Session = Depends(get_db)):
    if not PlayerRepository.exists_by_id(db, id):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Player não encontrado"
        )
    PlayerRepository.delete_by_id(db, id)
    return Response(status_code=status.HTTP_204_NO_CONTENT)

# Rota de atualização de perfil do player
@app.put("/api/players/{id}", response_model=PlayerResponse)
def update(id: int, request: PlayerRequest, db: Session = Depends(get_db)):
    if not PlayerRepository.exists_by_id(db, id):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Player não encontrado"
        )
    player = PlayerRepository.save(db, Player(id=id, **request.dict()))
    return PlayerResponse.from_orm(player)