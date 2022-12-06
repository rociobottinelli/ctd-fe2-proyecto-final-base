import { rest } from "msw";
import { API_URL } from "../app/constants";
const result = [
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    characterDirection: "Right",
  },
];

const handlers = [
  rest.get(API_URL, (req, res, ctx) => {
    // if (req.url.searchParams.get("?character=homer")) {
    //   return res(
    //     ctx.status(200),
    //     ctx.json({
    //       result: quoteCharacter,
    //     })
    //   );
    // }

    return res(
      ctx.status(200),
      ctx.json(
        result,
      )
    );
  }),
];

export { result, handlers };
