

/* Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users)
 и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.
 Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
 При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage*/


const url = 'https://jsonplaceholder.typicode.com/users';

const getUserList = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

try {

    const newData = await getUserList(url);
    console.log(newData);
	newData.forEach(item => { localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item)) });
	
    const div = document.querySelector('.cards');
	newData.forEach((element) => {
		div.insertAdjacentHTML(
			'beforeend', 
			`<div class = "card" id = "${element.id}" >
	            <h3 class = "title" >Пользователь ${element.id}</h3>
	            <p class = "name" >Имя: ${element.name}</p>
	            <p class = "username" >Ник: ${element.username}</p>
	            <p class = "email" >Email: ${element.email}</p>
	            <button class = "btn__del" id = "myBtn" >Удалить пользователя</button>
	         </div>
			`
		)
	});

	jQuery(document).ready(function($){
		$("button").on('click',function(){
			const idUser = $(this).closest('div').attr('id');
			const product = $(this).closest('.card');
            product.remove();
			localStorage.removeItem(idUser);
		    
		   
		});
	});

	

} catch (error) {

    console.error('Что-то пошло не так!');
}
  
  
  
