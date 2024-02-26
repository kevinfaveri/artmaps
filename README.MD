# ArtMaps

ArtMaps is a cross chain protocol that allow users to add randomization of generative art on top of existing *Maps* Ordinals/NFTs in the ecossystem, increasing their appreciation in value and providing a new layer of utility to them. It leverages *Maps* specifics characteristics like its Number (and other block properties *soon*) to generate unique art pieces, without reinscribing into another NFTs. If you own the *map* you all arts generated within the ArtMaps protocol. If you don't, maybe it is time to start collecting them.

## How it works

### Bitmaps Example
You can then run `pnpm run start-bitmaps-dev` to run the example by accessing: `http://localhost:3000?inscriptionId=99f82134905148553d22d67d356782082a33fdfdc65a82457234b3818ef6a102i0&dev=true&debug=true` or `http://localhost:3000/test/test` for the testing sandbox.

As it can be seen, there are three params:
- `inscriptionId`: The *Map* inscription id number you want to generate the art from (if not specified, for the example, it will randomize between 5 different *Map* ids)
- `dev`: If you want to run the example in development mode, set it to true (it will use ordinals.com CDN rather than recursion). Marketplaces/Galleries shouldn't enable this.
- `debug`: If you want to see the ArtMap information on the page, set it to true; only works. Marketplaces/Galleries can enable this if they feature a full screen mode view of the ArtMap.

### Integration in Marketplaces/Galleries
The protocol is designed to be integrated into existing marketplaces and galleries, so that users can see the art generated from the *Map* they are interested in. The protocol is designed to be as simple as possible to integrate, and it is designed to be as flexible as possible, so that it can be integrated into any marketplace or gallery, regardless of the technology used.
When passing the inscription content to an iframe, example: `/content/54d8as4dsa56d4sa564d` and then append the `&inscriptionId` param. If it is a BitMaps inscription, it will render the art derived from the Bitmap. If it is not, it will shuffle between 5 random Bitmaps that were added to the source code (this, talking about the art-example in this repository).

If the marketplace/gallery website features a full page view, it can enable the `debug` param to show the ArtMap information on the page.

## Roadmap
- V1 Bitmaps randomization script using Number validation ✅
- Bitmap Art example ✅
- GitBook Documentation pointing to this repo and explaning the protocol and how to use it
- Gallery View website connected to Magic Eden BTC API or Bitmaps Community API
- On top of the Gallery View, support a P5.js sandbox to allow users to create their own art and test live with any BitMap number
- V2 Add randomization script that supports specific block properties for unique art
- Future: Add support for other chain protocols (like OpenSolmaps)

## Donations
If you like the project and want to support it, you can donate to the following addresses:
- BTC: 33GbgsMwWf3wk9ZBbXw82KJS8j1cJKzAms
- BTC Ordinals: bc1prz6z3582r9u46j60ran97y602y5hdg2vtsxl2w6v72dr5secn9xq9ahus6
- SOL: Ggm8Pmwx2HSv3LMTT7mGSSGKU14d4WnTnnXozmx9m46a

