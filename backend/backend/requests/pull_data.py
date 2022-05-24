import fastapi
import requests as req
import typing as _typing

from backend.requests.convert_json_to_objects import convert_json_to_cocktail_base

from lib.schemas.pydantic_models import CocktailBase


def get_json_obj(path: str) -> _typing.Dict:
    try:
        response = req.get(path)
        response.raise_for_status()
    except req.exceptions.HTTPError:  # type: ignore
        if 400 <= response.status_code < 500:
            raise fastapi.HTTPException(status_code=404, detail="Could not find cocktails")
        else:
            raise fastapi.HTTPException(status_code=500, detail="Error Api Server side")
        # Add other error catches
    try:
        details = response.json()
    except req.exceptions.JSONDecodeError:  # type: ignore
        raise fastapi.HTTPException(status_code=406, detail="Response not JSONable")
    return details


def get_cocktail_by_name(cocktail_name: str, path: str) -> _typing.List[CocktailBase]:
    details = get_json_obj(path="{}{}".format(path, cocktail_name.lower()))

    return_cocktails = []

    for cocktail in details["drinks"]:
        return_cocktails.append(convert_json_to_cocktail_base(json_response=cocktail))

    if not return_cocktails:
        raise fastapi.HTTPException(
            status_code=404, detail="No cocktails found with name: {}".format(cocktail_name)
        )
    return return_cocktails


def get_cocktail_by_ingredients(cocktail_ingredient: str, path: str) -> _typing.List[CocktailBase]:
    details = get_json_obj(path="{}{}".format(path, cocktail_ingredient.lower()))

    return_cocktails = []

    for cocktail in details["drinks"]:
        return_cocktails.append(convert_json_to_cocktail_base(json_response=cocktail))

    if not return_cocktails:
        raise fastapi.HTTPException(
            status_code=404, detail="No cocktails found with name: {}".format(cocktail_ingredient)
        )
    return return_cocktails


def get_popular_cocktails(path: str) -> _typing.List[CocktailBase]:
    details = get_json_obj(path=path)

    return_cocktails = []

    for cocktail in details["drinks"]:
        return_cocktails.append(convert_json_to_cocktail_base(json_response=cocktail))

    return return_cocktails
