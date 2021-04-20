import { createRef } from 'react'

const state = {
  sections: 2,
  pages: 2,
  zoom: 75,
  top: createRef(),
  yeet: () => {
    console.log(
      `%c ________________________________________
< Moooo, (Hey There, You found what you looking for?) mooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
                          - Haile Lakew
                `,
      'font-family:monospace'
    )
  }
}

export default state
