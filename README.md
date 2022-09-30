# Cordae Tribute Page Reimagined - <span>[Live Preview](https://cordae-tribute-page-reimagined.vercel.app/)</span>
My tribute page about Cordae reimagined.

## Backstory
I wasn't really satisfied with the [original tribute page](https://github.com/Pilvorm/Cordae-Tribute-Page) I made after finishing it. Long story short, I learned front-end web development libraries including Sass and jQuery and that's when I got the feeling I could really improve the tribute page with new features and improved design (I stress a lot about it).

## Development
This project was made with:
- HTML
- CSS
- [Sass](https://sass-lang.com/)
- [jQuery](https://jquery.com/)
- [Google Material Symbols](https://fonts.google.com/icons)


With contents taken from:
- [Wikipedia](https://en.wikipedia.org/wiki/Cordae)
- [Spotify](https://open.spotify.com/artist/0huGjMyP507tBCARyzSkrv)
- [Genius](https://genius.com/artists/Cordae)
- and other various websites for the gallery.

Challenges:
- I wanted every section to be on a single page - not needing to reload the page when choosing another section to read. Making the navigation bar was the most challenging part when developing this page. Good thing jQuery's element's class manipulation (includes addClass, removeClass) was simple, but yet effective. The fadeIn and fadeOut functions came in handy for smooth section transitions!
- Was confused about why media queries won't work when resizing the browser. Turns out I used **max-device-width** instead of **max-width**. With max-device-width, the media queries only run on devices that fulfill size conditions.

## Go see the page!
See the page [here](https://cordae-tribute-page-reimagined.vercel.app/).
