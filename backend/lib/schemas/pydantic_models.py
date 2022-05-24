from pydantic import BaseModel
import typing as _typing


class CocktailBase(BaseModel):
    name: str
    image: str
    description: _typing.Optional[str] = None
