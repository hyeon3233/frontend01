//Na
const headerNavs = [
    {title: '얄코강좌는', link: '#about'},
    {title: 'HTML', link: '#html'},
    {title: 'CSS', link: '#css'},
    {title: '커리큘럼', link: '#curriculum'},
    {title: '문의하기', link: '#contact'}
];

const $headerNavUl = document.querySelector('nav.header__nav > ul');

for(const item of headerNavs) {
    const $li = document.createElement('li');
    //$li.className = 'header__nav-item';
    $li.classList.add('header__nav-item');
    $li.innerHTML = `
        <a href="${item.link}">${item.title}</a>`;
    $headerNavUl.appendChild($li);
}

