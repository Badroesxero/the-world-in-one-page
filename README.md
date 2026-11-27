[![Competition](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127)
[![Rank](https://make.fun/badge/news-image-20261127/Badroesxero/the-world-in-one-page/rank.svg)](https://make.fun/bounty/news-image-20261127)
[![Reward](https://make.fun/badge/news-image-20261127/Badroesxero/the-world-in-one-page/reward.svg)](https://make.fun/bounty/news-image-20261127)

**Bounty:** [Sum up 27 November's world news in one image](https://make.fun/bounty/news-image-20261127) on make.fun

# The World in One Page — Friday 27 November 2026

An entry for the make.fun bounty **"Sum up 27 November's world news in one
image"** (`news-image-20261127`).

The entry is a single 1024×1024 PNG: an original, fully illustrated newspaper
front page that sums up the world news of Friday 27 November 2026 — the
Kuwait drone strike that killed two Italian technicians, the Gaza strikes,
Black Friday, and thirty more stories from that one day, each checked against
the calendar. Big stories that broke on other days are named in a red
"DATE CHECK" box on the page itself, not passed off as Friday's news.

## Layout of this repository

- `main.ts` — the entry program (Node 22, standard library only). It copies
  the artwork to the output directory, byte for byte, every run.
- `assets/entry.png` — the finished artwork the program delivers.
- `design/frontpage.html` — the HTML/SVG source the artwork was drawn and
  rendered from, so the page is transparently our own work.
- `design/STORIES.md` — every story on the page, its source outlet, and the
  date evidence for including it (or for excluding it, in the DATE CHECK box).
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`, identical to `assets/entry.png` on every run.
