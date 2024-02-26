# ArtMaps

ArtMaps is a cross chain protocol that allow users to add randomization of generative art on top of existing *Maps* Ordinals/NFTs in the ecossystem, increasing their appreciation in value and providing a new layer of utility to them. It leverages *Maps* specifics characteristics like its Number (and other block properties *soon*) to generate unique art pieces, without reinscribing into another NFTs. If you own the *map* you all arts generated within the ArtMaps protocol. If you don't, maybe it is time to start collecting them.

## How it works

### Bitmaps Example
You can then run `pnpm run start-bitmaps-dev` to run the example by accessing: `http://localhost:3000?inscriptionId=99f82134905148553d22d67d356782082a33fdfdc65a82457234b3818ef6a102i0&dev=true&debug=true` or `http://localhost:3000/test/test` for the testing sandbox.

As it can be seen, there are three params:
- `inscriptionId`: The *Map* inscription id number you want to generate the art from (if not specified, for the example, it will randomize between 5 different *Map* ids)
- `dev`: If you want to run the example in development mode, set it to true (it will use ordinals.com CDN rather than recursion). Marketplaces/Galleries shouldn't enable this.
- `debug`: If you want to see the ArtMap information on the page, set it to true; only works. Marketplaces/Galleries can enable this if they feature a full screen mode view of the ArtMap.

### Developing your own ArtMap and deploying
You can develop your own ArtMap by following the example in the `art-example` folder. For it to be a valid ArtMap, it needs to:
1 - Use the public good BitMapsRandomizerV1.js script (through recursion on `/content/1bcc96d3dc3b274498f753ee958593b0d1007d8bb58ea57be2fe4e133291f165i0`)
2 - Use of the randomization functions available in `BitMapsRandomizerV1` as seed for a generative art algorithm; so that each BitMap translates to a unique art on your algorithm
3 - Be inscribed on the Satoshi Nakamoto Wallet: `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`

### Deploying your ArtMap

1 - After developing your ArtMap using `pnpm run start-bitmaps-dev` as explained above, you need to run `pnpm run build-bitmaps`
2 - `OPTIONAL` For authorship purposes, the artist should add a signature on the art, with the following format, invisible in the UI on an element with id `artist-signature`: `ArtMap by [Artist Name], reacheable at [TWITTER/EMAIL]` (check art-example for reference). This can be used in the future to take decisions regarding the art, like if it should be used in a gallery or not. The only one who can claim authorship is the one featured in the signature.
2 - Then, the artist should inscribe the `/dist/bitmaps/index.html` file on the Satoshi Nakamoto Wallet: `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`. You can use any service that supports file uploads.


### Integration in Marketplaces/Galleries
The protocol is designed to be integrated into existing marketplaces and galleries, so that users can see the art generated from the *Map* they are interested in. The protocol is designed to be as simple as possible to integrate, and it is designed to be as flexible as possible, so that it can be integrated into any marketplace or gallery, regardless of the technology used.
When passing the inscription content to an iframe, example: `/content/54d8as4dsa56d4sa564d` and then append the `&inscriptionId` param. If it is a BitMaps inscription, it will render the art derived from the Bitmap. If it is not, it will shuffle between 5 random Bitmaps that were added to the source code (this, talking about the art-example in this repository).

If the marketplace/gallery website features a full page view, it can enable the `debug` param to show the ArtMap information on the page.

Note: In the future, an indexer may be developed to automate the process of adding new ArtMaps to the protocol to a centralized list anyone can use; for now, if you have an ArtMap, you need to share it with the world. Coming soon: the ArtMaps official website will have a explorer section where you can add your ArtMap to the list by submiting a PR here. Follow https://twitter.com/kevcode_art for updates.


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

