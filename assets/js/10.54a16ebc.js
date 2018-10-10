(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{172:function(t,s,e){t.exports=e.p+"assets/img/petshop_chapter3.f1a4212c.jpg"},205:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"📋-chapter-3-connect-your-project-to-an-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#📋-chapter-3-connect-your-project-to-an-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 📋 Chapter 3: Connect your Project to an API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[s("strong",[this._v("Project Goal")])]),this._v(" "),s("th",[this._v("Learn how API calls work and how to implement them in your web app")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("strong",[this._v("What you’ll learn")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("strong",[this._v("Tools you’ll need")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[s("strong",[this._v("Time needed to complete")])]),this._v(" "),s("td",[this._v("1 hour")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Instructions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"add-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-axios","aria-hidden":"true"}},[this._v("#")]),this._v(" Add Axios")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("First, add Axios's library to your project dependencies. To do so in Code Sandbox, click on "),e("code",[t._v("File Editor")]),t._v(" tab -> "),e("code",[t._v("Dependencies")]),t._v(" -> "),e("code",[t._v("Add Dependency")]),t._v(" and search for "),e("code",[t._v("axios")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Import axios into the component where we will perform our API call - "),s("code",[this._v("views/Pets.vue")]),this._v(". In that component's script block, add this line:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[this._v("import")]),this._v(" axios "),s("span",{attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),s("span",{attrs:{class:"token string"}},[this._v('"axios"')]),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("axios"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"https://dog.ceo/api"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"call-the-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-the-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Call the API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We want a new image to replace the old one right when the component is created, so let's add a "),s("code",[this._v("created()")]),this._v(" hook right after "),s("code",[this._v("data")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("created")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("💡")]),this._v(" "),s("p",[this._v("Note: Make sure to add a comma after the data object and then add the created() hook!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Inside the created hook we will add our first query to the API. To perform a GET request Axios uses the "),s("code",[this._v("axios.get")]),this._v(" method. The result will be a JavaScript promise, so we have to provide success and failure callbacks to it. For now, let's simply print the query result to console. Edit "),s("code",[this._v("created(){}")]),this._v(" by placing this snippet between the curly brackets:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  axios\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v('"/breed/husky/images/random"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("then")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("log")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token keyword"}},[t._v("catch")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("log")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In the browser view in Code Sandbox, switch to the Pets tab. You should see an object in your console. Drill into it by clicking its left-hand arrow. We are interested in its "),s("code",[this._v("data")]),this._v(" field. You can see we have a status "),s("code",[this._v("success")]),this._v(" and a message with an image URL (you can copy/paste it to your browser and discover a cute Husky).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-the-api-1-replace-some-of-the-static-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-api-1-replace-some-of-the-static-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Use the API 1 - Replace Some of the Static Data")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Let's replace our Husky image with this new one. First, we should find a Husky in our dogs array with an "),e("code",[t._v("Array.find")]),t._v(" method. It will check the "),e("code",[t._v("dogs")]),t._v(" array items that we are already loading into the component from the "),e("code",[t._v("data/dogs.js")]),t._v(" data file one by one to find the first item matching provided criteria. In our case the criteria is a "),e("code",[t._v("breed")]),t._v(" equal to "),e("code",[t._v("husky")]),t._v(". Replace the "),e("code",[t._v("console.log()")]),t._v(" inside the "),e("code",[t._v("then")]),t._v(" callback in the Axios call we just implemented witt this string:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" husky "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dogs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("find")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dog "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" dog"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("breed "),e("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'husky'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("log")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("husky"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Ok, we have found a husky, which you can see in the "),s("code",[this._v("console.log()")]),this._v(". You can also see him in your app's Pets page - look for 'Max', listed as a husky. Now let's provide him with a new image by reassigning the image url from the static data to data coming from the API. Add this line under the snippet you just added.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("husky"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-the-api-2-randomize-the-images"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-api-2-randomize-the-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Use the API 2- Randomize the Images")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Let's try to load a random image for each dog in our "),s("code",[this._v("dogs")]),this._v(" array. The first thing we need is a proper endpoint for each breed we have. We will create an array of links using the "),s("code",[this._v(".map")]),this._v(" method.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("💡")]),this._v(" "),s("p",[this._v("The "),s("code",[this._v("map()")]),this._v(" method creates a new array with the results of calling a provided function on every element in the calling array.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Overwrite the code in the "),s("code",[this._v("Created()")]),this._v("..."),s("code",[this._v(".then")]),this._v(" by creating this linksArray constant:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" linksArray "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dogs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("map")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   dog "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/breed/"')]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" dog"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("breed "),e("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"/images/random"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("We're taking the breed of each dog in the array and inserting it inside the endpoint string (we used the same one previously for husky, but "),s("code",[this._v("breed")]),this._v(" was hard-coded to a static value there).")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("At this point, we have to perform multiple API calls using all the links we've just created - as many API calls as exist in our static data. Axios has a helper functions for this case called "),e("code",[t._v("axios.all")]),t._v(" and "),e("code",[t._v("axios.spread")]),t._v(". We will provide an array of our requests to the first one; it will return an array of responses and we should use "),e("code",[t._v("axios.spread")]),t._v(" to spread this array into multiple arguments. To create an array of queries we will use a "),e("code",[t._v(".map")]),t._v(" method on our "),e("code",[t._v("linksArray")]),t._v(", performing "),e("code",[t._v("axios.get")]),t._v(" for each link. Add this snippet right under the linksArray snippet you added just before.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("axios"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("all")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("linksArray"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("map")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" axios"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("then")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     axios"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("spread")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("res"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dogs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("forEach")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dog"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         dog"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("💡")]),t._v(" "),e("p",[t._v("What's going on here? The forEach() method executes a provided function once for each array element in linksArray. It's basically looping through the static data and adding a random image to "),e("code",[t._v("this.dogs")]),t._v(". So, after we've got an array of images in response, we are iterating through our "),e("code",[t._v("dogs")]),t._v(" array again, replacing each dog image with a corresponding new one from the API ("),e("code",[t._v("index")]),t._v(" is the index of the current element being processed in the array; it is the same for both arrays because response objects are placed in the same order they were sent).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now we have new images each time our "),s("code",[this._v("Pets")]),this._v(" component is created (you can see the images change on page refresh or simply by switching the tabs from "),s("code",[this._v("pets")]),this._v(" to "),s("code",[this._v("home")]),this._v(" and back). The dogs' names and breeds are still being drawn from static data, but the images are coming from the API, matched with the static dog's breed.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The only remaining problem is that we can still see old images for a short moment when we enter the pets tab. Let's clear the dogs images before we perform a query. Add this string as the first one inside the "),s("code",[this._v("created()")]),this._v(" hook:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("this")]),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dogs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("forEach")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dog "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     dog"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('""')]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Now we initially see empty dog portraits and then images are loaded from the API. Progress!")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"final-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#final-result","aria-hidden":"true"}},[this._v("#")]),this._v(" Final result")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(172),alt:"chapter 3 result"}})])}],n=e(0),o=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("table",[t._m(1),t._v(" "),e("tbody",[e("tr",[t._m(2),t._v(" "),e("td",[t._v("Using the "),e("a",{attrs:{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("DogCEO API"),e("OutboundLink")],1),t._v(" you will load dog images dynamically, instead of using dummy data")])]),t._v(" "),e("tr",[t._m(3),t._v(" "),e("td",[t._v("A modern browser like Chrome. If using Chrome, download Chrome DevTools for Vue.js. An account in CodeSandbox.io. If you get lost, import the starting point for this chapter "),e("a",{attrs:{href:"https://github.com/VueVixens/projects/tree/master/chapter-2-end",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(". Instructions on how to do this are in "),e("router-link",{attrs:{to:"./appendix_1.html"}},[t._v("Appendix 1")])],1)]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("If you need to restart your project, clone "),e("a",{attrs:{href:"https://github.com/VueVixens/projects/tree/master/chapter-1-end",target:"_blank",rel:"noopener noreferrer"}},[t._v("this repo"),e("OutboundLink")],1),t._v(" into Code Sandbox after logging in.")]),t._v(" "),e("p",[t._v("So far, we have placed images of dogs onto our screens via some static JSON data that we imported into a component. That's great for demo purposes, but in real life, you're almost always going to build web apps that consume real data that's coming from either your own data sources, or externally, from somewhere on the internet. Let's learn how to consume third-party data.")]),t._v(" "),e("p",[t._v("To perform API calls we will need a library called "),e("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios"),e("OutboundLink")],1),t._v(". It's a promise-based HTTP client that works both in the browser and in a node.js environment.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("💡")]),t._v(" "),e("p",[t._v("Originally, Vue supported its own way of making API calls using .ajax; but this resource was deprecated as Axios's standalone library worked very well for this purpose, removing the need for an integrated solution. Read more about this decision "),e("a",{attrs:{href:"https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),e("p",[t._v("All our calls will use the same base URL with different endpoints. Right under the import for axios, add the base URL to Axios' options:")]),t._v(" "),t._m(10),e("p",[t._v("Now we are ready to make our first API call.")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("Let's replace the first static image with the random Husky picture from the Dog CEO API. First we have to check which endpoint we have to use. Looking at the API's "),e("a",{attrs:{href:"https://dog.ceo/dog-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),e("OutboundLink")],1),t._v(" we can find out that we need to append "),e("code",[t._v("/breed/husky/images/random")]),t._v(" to the base API call (the "),e("code",[t._v("api")]),t._v(" part is already in our base URL).")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("💡")]),t._v(" "),e("p",[t._v("This is our app's first livecycle hook! These are very useful when you want fine control over when to run blocks of code. Read more "),e("a",{attrs:{href:"https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),e("p",[t._v("You should see the image change to a random husky image pulled from the Dog CEO API.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37)])},a,!1,null,null,null);o.options.__file="ch3.md";s.default=o.exports}}]);