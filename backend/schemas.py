from pydantic import BaseModel

class PlayerBase(BaseModel):
    name: str
    nickname: str
    avatar: str
    pdl: int
    matches: int
    wins: int
    looses: int

class PlayerRequest(PlayerBase):
    ...

class PlayerResponse(PlayerBase):
    id: int

    class Config:
        orm_mode = True
        from_attributes = True
