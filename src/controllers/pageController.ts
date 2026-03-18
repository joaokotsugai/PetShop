import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
    banner: {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
        },
    menu: createMenuObject('all')
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
    banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
        },
    menu: createMenuObject('dogs')
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
    banner: {
        title: 'Gatos',
        background: 'banner_cat.jpg'
        },
    menu: createMenuObject('cats')
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
    banner: {
        title: 'Peixes',
        background: 'banner_fish.jpg'
        },
    menu: createMenuObject('fishes')
    });
}