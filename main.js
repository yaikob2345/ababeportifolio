// // function toggleMenu() {
// //   const menu = document.querySelector(".menu-links");
// //   const icon = document.querySelector(".hamburger-icon");
// //   menu.classList.toggle("open");
// //   icon.classList.toggle("open");
// // }
// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }
//    const phrases = ["Web Develper", "Programmer","gtry"];
//    const el = document.getElementById("typewriter");

// let sleepTime = 100;
 
// let curphraseIndex = 0;

// const writeLoop = async () => {
//     while (true) {
//         let curword = phrase[curphraseIndex];

//         for (let i = 0; i < curword.length; i++) {
//             el.innerText = curword.substring(0, i + 1);
//             await sleep(sleepTime);
//         }
        
//         await sleep(sleepTime * 10);

//         for (let i = curword.length; i > 0; i--) {
//             el.innerText = curword.substring(0, i - 1);
//             await sleep(sleepTime);

//         }
//         await sleep(sleepTime * 5);
        
//         if (curphraseIndex === phrase.length - 1) {
//             curphraseIndex = 0;
//         } else {
//             curphraseIndex++;
//         }
//     }
// };