import k from '../kaboom'

export default function swipe() {
  document.addEventListener('touchstart', handleTouchStart, false)
  document.addEventListener('touchmove', handleTouchMove, false)

  var xDown = null
  var yDown = null

  function getTouches(evt) {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ) // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0]
    xDown = firstTouch.clientX
    yDown = firstTouch.clientY
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return
    }

    var xUp = evt.touches[0].clientX
    var yUp = evt.touches[0].clientY

    var xDiff = xDown - xUp
    var yDiff = yDown - yUp

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        console.log('left')
        leftPress()
      } else {
        console.log('right')
      }
    } else {
      if (yDiff > 0) {
        console.log('up')
      } else {
        console.log('down')
      }
    }
    /* reset values */
    xDown = null
    yDown = null
  }
}


// document.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 37) {
//     alert('Left pressed')
//   }
// })

function leftPress() {
  //var evt = document.createEvent("KeyboardEvent");
  let evt = new KeyboardEvent('keydown', {
    key: 'ArrowLeft',
    keyCode: 37
  })
  document.dispatchEvent(evt)
}

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//     <script>

//       // function shift_a_hack() {
//       //   Podium = {};
//       //   Podium.keydown = function(k) {
//       //     var oEvent = document.createEvent("KeyboardEvent");

//       //     // Chromium Hack
//       //     Object.defineProperty(oEvent, "keyCode", {
//       //       get: function() {
//       //         return this.keyCodeVal;
//       //       }
//       //     });
//       //     Object.defineProperty(oEvent, "which", {
//       //       get: function() {
//       //         return this.keyCodeVal;
//       //       }
//       //     });

//       //     if (oEvent.initKeyboardEvent) {
//       //       oEvent.initKeyboardEvent(
//       //         "keydown",
//       //         true,
//       //         true,
//       //         document.defaultView,
//       //         false,
//       //         false,
//       //         false,
//       //         false,
//       //         k,
//       //         k
//       //       );
//       //     } else {
//       //       oEvent.initKeyEvent(
//       //         "keydown",
//       //         true,
//       //         true,
//       //         document.defaultView,
//       //         false,
//       //         false,
//       //         false,
//       //         false,
//       //         k,
//       //         0
//       //       );
//       //     }

//       //     oEvent.keyCodeVal = k;

//       //     if (oEvent.keyCode !== k) {
//       //       alert(
//       //         "keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")"
//       //       );
//       //     }

//       //     document.dispatchEvent(oEvent);
//       //   };

//       //   Podium.keydown(65);
//       // }

//       function shift_a_good() {
//         //var evt = document.createEvent("KeyboardEvent");
//         let evt = new KeyboardEvent("keydown", {
//           shiftKey: true,
//           key: "A",
//           keyCode: 65
//         });
//         document.dispatchEvent(evt);
//       }
//     </script>
//   </head>

//   <body>
//     <div id="app"></div>
//     <hr />
//     <p>
//       Chrome does not let you modify the keyCode prop when you trigger it, so it
//       defaults to 0. You can use this code to trigger a keydown with a char code
//       of 0 in chrome.

//       <a href="https://gist.github.com/boazsender/1291874">according to here</a>
//       and
//       <a
//         href="https://stackoverflow.com/questions/8942678/keyboardevent-in-chrome-keycode-is-0"
//         >there</a
//       >
//     </p>
//     <p>how to fix?</p>
//     <!-- <p>
//       <span>press</span>
//       <button onclick="shift_a_hack()">simulate shift + a</button>
//       <span>you will see alert...</span>
//       <a
//         href="https://stackoverflow.com/questions/10455626/keydown-simulation-in-chrome-fires-normally-but-not-the-correct-key/10520017#10520017"
//       >
//         给 chrome hack的方法参考这个</a
//       >
//     </p>
//     <p>
//       but its so wired , cause I dont simulate shift key,but event.shiftKey ===
//       true
//     </p> -->

//     <p>
//       <span>press this final </span>
//       <button onclick="shift_a_good()">simulate shift + a</button>
//       <span>you will see alert :P</span>
//     </p>
//   </body>
// </html>

