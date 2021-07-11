/*
 * @Author: raoqidi
 * @Date: 2021-07-11 15:13:34
 * @LastEditors: raoqidi
 * @LastEditTime: 2021-07-11 15:15:39
 * @Description: please add a description to the file
 * @FilePath: /moshify/js/main.js
 */
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
