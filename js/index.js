let chooseSpollers = document.querySelectorAll('.choose_spollers-title');
const firstSpoller = chooseSpollers[0].nextElementSibling;
firstSpoller.style.maxHeight = firstSpoller.scrollHeight + 'px';
chooseSpollers.forEach((spollerItem) => {
  spollerItem.addEventListener('click', () => {
    spollerItem.classList.toggle('active');
    const toggleItemBody = spollerItem.nextElementSibling;
    if (spollerItem.classList.contains('active')) {
      toggleItemBody.style.maxHeight = toggleItemBody.scrollHeight + 'px';
    } else {
      toggleItemBody.style.maxHeight = 0;
    }
  });
});

Fancybox.bind('[data-fancybox="video"]', {});

const parentClients = document.querySelector('.our_clients_inner');
const allClientsItems = document.querySelectorAll('.our_clients-item');
parentClients.addEventListener('click', (e) => {
  let target = e.target;
  let clientClassList = target.offsetParent.classList;
  if (target.classList.contains('our_clients-btn')) {
    for (let i = 0; i < allClientsItems.length; i++) {
      allClientsItems[i].classList.remove('active');
    }
    clientClassList.add('active');
  }
});
