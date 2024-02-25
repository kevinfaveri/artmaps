# ArtMaps

ArtMaps is a new cross chain protocol that allow users to add randomization of generative art on top of existing *Maps* Ordinals/NFTs in the ecossystem, increasing their appreciation in value and providing a new layer of utility to them. It leverages *Maps* specifics characteristics like its Number (and other block properties *soon*) to generate unique art pieces, without reinscribing into another NFTs. If you own the *map* you all arts generated within the ArtMaps protocol. If you don't, maybe it is time to start collecting them.

## How it works
### Bitmaps Example
For running and testing the examples locally, you will need to have Node.js installed. You can download it from [here](https://nodejs.org/) as well as pnpm, which you can download from [here](https://pnpm.io/).
You can then run `pnpm run start-bitmaps-example` to run the example by accessing: `http://localhost:3000/art-example?inscriptionId=92cfa20551a88eceda2a3619524d1542a224590c12b9efa10315be764f73987ci0&dev=true`
You may change the `inscriptionId` to any other valid *Map* you own.

## Roadmap
- V1 Bitmaps randomization script using Number validation
- Bitmap Art example
- Gallery View website connected to Magic Eden BTC API or Bitmaps Community API
- On top of the Gallery View, support a P5.js sandbox to allow users to create their own art and test live with any BitMap
- GitBook Documentation pointing to this repo and how to use
- V2 Add randomization script that supports specific block properties for unique art
- Future: Add support for other chain protocols (like OpenSolmaps)

