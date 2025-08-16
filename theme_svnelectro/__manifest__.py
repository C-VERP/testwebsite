{
    "name": "SvN Electro Theme",
    "summary": "Strak blauw-wit thema gemodelleerd op svnelectro.be",
    "description": "Moderne Odoo website theme met hero, dienstenraster en CTA in de stijl van svnelectro.be.",
    "category": "Theme/Corporate",
    "version": "18.0.1.0.0",
    "author": "Chrisse",
    "license": "LGPL-3",
    "depends": ["website"],
    "data": [
        "views/layout_templates.xml",
        "views/header_templates.xml",
        "views/snippets/svnelectro_home.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "theme_svnelectro/static/src/css/style.scss",
        ],
    },
    "installable": True,
    "application": False,
}
