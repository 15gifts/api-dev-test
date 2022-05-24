from fastapi import FastAPI
import typing as _typing

from backend.requests import pull_data
from consts import envs
from lib.schemas.pydantic_models import CocktailBase

app = FastAPI()


@app.get("/cocktails/name/{cocktail_name}")
async def get_cocktail_by_name(cocktail_name: str) -> _typing.List[CocktailBase]:
    return pull_data.get_cocktail_by_name(path=envs.COCKTAIL_BY_NAME, cocktail_name=cocktail_name)


@app.get("/cocktails/ingredient/{ingredient_name}")
async def get_cocktail_by_ingredient(ingredient_name: str) -> _typing.List[CocktailBase]:
    return pull_data.get_cocktail_by_ingredients(path=envs.COCKTAIL_BY_INGREDIENTS, cocktail_ingredient=ingredient_name)


@app.get("/cocktails/popular-cocktails")
async def get_popular_cocktails() -> _typing.List[CocktailBase]:
    return pull_data.get_popular_cocktails(path=envs.POPULAR_COCKTAILS)
