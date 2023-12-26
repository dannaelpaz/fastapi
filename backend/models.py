from sqlalchemy import Column, Integer, String

from database import Base

class Player(Base):
    __tablename__ = "players"

    id: int = Column(Integer, primary_key=True, index=True)
    name: str = Column(String(100), nullable=False)
    nickname: str = Column(String(255), nullable=False)
    avatar: str = Column(String(255), nullable=False)
    pdl: int = Column(Integer, nullable=False)
    matches: int = Column(Integer, nullable=False)
    wins: int = Column(Integer, nullable=False)
    looses: int = Column(Integer, nullable=False)
