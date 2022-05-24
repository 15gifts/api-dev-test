import typing as _typing

import fastapi
import pydantic

from lib.schemas.pydantic_models import CocktailBase


def convert_json_to_cocktail_base(json_response: _typing.Dict) -> CocktailBase:
    try:
        return CocktailBase(
            name=json_response["strDrink"],
            image=json_response["strDrinkThumb"]
        )
    except pydantic.error_wrappers.ValidationError:
        raise fastapi.HTTPException(
            status_code=406, detail="Received json doesn't have required keys"
        )
