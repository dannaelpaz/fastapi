from sqlalchemy.orm import Session

from models import Player

class PlayerRepository:
    @staticmethod
    def find_all(db: Session) -> list[Player]:
        return db.query(Player).all()

    @staticmethod
    def save(db: Session, player: Player) -> Player:
        if player.id:
            db.merge(player)
        else:
            db.add(player)
        db.commit()
        return player

    @staticmethod
    def find_by_id(db: Session, id: int) -> Player:
        return db.query(Player).filter(Player.id == id).first()

    @staticmethod
    def exists_by_id(db: Session, id: int) -> bool:
        return db.query(Player).filter(Player.id == id).first() is not None

    @staticmethod
    def delete_by_id(db: Session, id: int) -> None:
        player = db.query(Player).filter(Player.id == id).first()
        if player is not None:
            db.delete(player)
            db.commit()
