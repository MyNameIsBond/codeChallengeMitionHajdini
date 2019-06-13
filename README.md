<h1>Coding Challenge for thirdfort</h1>
<hr />
<h3>This bellow REST-API can delete - create - update notes using nodejs MongoDB</h3>
<h4>npm packages Required</h4>
<ul>
  <li>express</li>
  <li>mongoose</li>
  <li>expres-validator</li>
</ul>
<br />
<h3>Steps to make it work</h3>
<hr />
<ul>
  <li>
    from terminal ' git clone https://github.com/MyNameIsBond/codeChallengeMitionHajdini.git '
  </li>
  <li>after is being cloned move to the file by using cd</li>
  <li>make sure you have node installed if not, install it from https://nodejs.org/en/download/</li>
  <li>
    Make sure you have installed and set up MongoDB from https://www.mongodb.com/download-center
  </li>
  <li>then from terminal in the project's folder type 'npm i' or 'npm install</li>
  <li>to run the tests type from your terminal 'npm run test'</li>
</ul>
<br />
<h3>How to use API</h3>
<hr />
<ul>
  <li>to save (get method): localhost:8080/notes/save/The_To_Be_Saved</li>
  <li>
    to delete (get method): localhost:8080/notes/delete/id. The id is being send to front end when
    the archived or unarchived notes are being requested
  </li>
  <li>
    to update a note: notes/update/newNote/id. The Id and the new note need to be send. return 200
    status if the request is successful and 400 if something went wrong
  </li>
</ul>
<br />
<h3>Why I am using Node.js and mongoDB</h3>
<hr />
<br />
<ul>
  <li>
    Mongo is being used becuase it is super fast, fatser than SQL. It is easier to delete - edit -
    save when you are interacting with node.js. Since Mongod is in a js object form.
  </li>
  <li>I am using mocha for the testings.</li>
</ul>

<br />
<br />
<h3>What could have been done better</h3>
<ul>
  <li>Smarter testings</li>
  <li>seperate from index.js by creating a router file</li>
  <li>better documentation of the code</li>
</ul>

<h3>If you can't make it work don't worry</h3>
<p>bellow you will find a video-demonstration on how it works
https://1drv.ms/u/s!AiVsWJtak2iMg_UE3QGG9SIzNnSxpQ?e=PrN8RU 
</p>
