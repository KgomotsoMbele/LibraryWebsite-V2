// enquiries.js — simple canned-response FAQ/enquiry handler

(function(){
  const canned = {
    borrowing: `To download a book, visit the Library and use the Download link.` +
       ` <a class="answer-btn" href="library.html">Open Library</a>`,
    languages: `We currently offer books in English, Afrikaans, and Zulu.` +
         ` <a class="answer-btn" href="library.html">Browse by language</a>`,
    events: `Events are listed on our Events page.` +
      ` <a class="answer-btn" href="events.html">View Events</a>`,
    donations: `Yes — we welcome donations.` +
         ` <a class="answer-btn" href="contact-us.html">Contact Us</a>`
  };

  const faqList = document.getElementById('faq-list');
  const input = document.getElementById('q-input');
  const form = document.getElementById('enquiry-form');
  const answer = document.getElementById('answer');

  function findAnswer(text){
    if(!text) return "Please enter a question or pick a topic.";
    const normalized = text.toLowerCase();
    // simple keyword matching
    if(/download|download(ing)?|epub/.test(normalized)) return canned.borrowing;
    if(/language|afrikaans|zulu|english|languages/.test(normalized)) return canned.languages;
    if(/event|calendar|upcoming/.test(normalized)) return canned.events;
    if(/donat|give|contribute/.test(normalized)) return canned.donations;
    // fallback with helpful contact link
    return `Thanks for your question. If this doesn't answer your query, please <a href="contact-us.html">contact us</a> or try a keyword like 'download', 'languages', 'events', or 'donate'.`;
  }

  if(faqList){
    faqList.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      if(!li) return;
      const key = li.dataset.key;
      if(key && canned[key]){
        // set as HTML since canned responses include safe, controlled buttons/links
        answer.innerHTML = canned[key];
        input.value = li.textContent;
      }
    });
  }

  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = input.value && input.value.trim();
      // findAnswer returns plain text; some canned answers contain HTML
      const resp = findAnswer(q);
      answer.innerHTML = resp;
    });
  }
})();
