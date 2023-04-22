var footer_section = document.getElementById("footer");

var footer_row = document.createElement('div');
footer_row.className = 'row';
footer_section.appendChild(footer_row);

var heading5 = document.createElement('h5');
heading5.textContent = 'Lets Communicate';
footer_row.appendChild(heading5);

// var tel_icon = document.createElement('i');
// tel_icon.setAttribute('class', 'bi bi-telephone');

var footer_info1 = document.createElement('a');
footer_info1.href = 'tel:+91 981-146-0684';
footer_row.appendChild(footer_info1);

var heading6 = document.createElement('h6');
heading6.textContent = '+91 981 - 146 - 0684';
footer_info1.appendChild(heading6);

var footer_info2 = document.createElement('a');
footer_info2.href = 'tel:+91 996-688-3734';
footer_row.appendChild(footer_info2);

var heading6 = document.createElement('h6');
heading6.textContent = '+91 996 - 688 - 3734';
footer_info2.appendChild(heading6);

var footer_info3 = document.createElement('a');
footer_info3.href = 'mailto:info@5thdt.com';
footer_row.appendChild(footer_info3);

var heading6 = document.createElement('h6');
heading6.textContent = 'mailto:info@5thdt.com';
footer_info2.appendChild(heading6);

var heading6 = document.createElement('h6');
heading6.textContent = 'Hyderabad and Gurgaon';
footer_row.appendChild(heading6);

var footer_p = document.createElement('p');
footer_p.textContent = 'We hold all rights to our website';
footer_row.appendChild(footer_p);

var footer_row = document.createElement('div');
footer_row.className = 'row';
footer_section.appendChild(footer_row);

var social_icon_block = document.createElement('div');
social_icon_block.className = 'social__icons';
footer_row.appendChild(social_icon_block);

var social_icon_img = document.createElement('img');
social_icon_img.className = 'social__icons';
footer_row.appendChild(social_icon_img);