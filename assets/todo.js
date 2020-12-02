/*
	When *CLICKED ANYWHERE* on the list item except where task details are printed,
	*The checked class gets toggled to the list item*
*/ 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// DOM manipulation to change the Background Color of Task Category Span on the basis of Content
var category = document.getElementsByClassName("task-category-span");
for(let i = 0; i<category.length; i++)
{
	if(category[i].innerText=="Work")
	{
		category[i].style.backgroundColor = "#573280";
	}
	else if(category[i].innerText=="Personal")
	{
		category[i].style.backgroundColor = "#0D63BF";
	}
	else if(category[i].innerText=="Chores")
	{
		category[i].style.backgroundColor = "#104911";
	}
	else if(category[i].innerText=="Assignment")
	{
		category[i].style.backgroundColor = "#F7B801";
	}
	else if(category[i].innerText=="Others")
	{
		category[i].style.backgroundColor = "grey";
	}
}

/* `Fetches a different quote everytime the page is reloaded i.e routes are accessed about programming using open api` */
$.ajax(
		{
			url:'http://quotes.stormconsultancy.co.uk/random.json',
			method: 'get',
			success: function(data)
			{
					var quoteText = data.quote;
					var quoteAuthor = data.author;
					var quotes = document.getElementById('quotesText');
					var author = document.getElementById('quotesAuthor');
					quotes.innerText = "'" +quoteText+ "'";
					author.innerText = " - " + quoteAuthor;
			}
		}
	
		);