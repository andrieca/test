// async function data(){
//     let users = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     let nameUsers = await users.json();
//     let newUsers = nameUsers.map(element => {
//       return element.username
//       });

//       let nameObj = newUsers.sort().map(name => {
//         return {name}
//       });


//     let post = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     let newPost = await post.json();
//     function post_count(newPost, userId){
//             let sum = 0;
          
//            for(let i = 0; i < newPost.length; i++){
//             if(newPost[i].userId === userId){
//               sum++;
    
//             }else{ sum = sum };
//            } console.log("sum" , sum);
            
//            }
//            post_count(newPost, 4);
//            post_count(newPost, 3);
    
   

//      return  nameObj
//     }
    
//     data()
//   .then(user => console.log(user))
//   .catch(error => console.log(error));


// вариант 2

// let arr = [];
  // fetch(`https://jsonplaceholder.typicode.com/users`)
  // .then(response => response.json())
  // .then(avtor => {
  //   console.log(avtor)
  //   let userName = avtor.map(function(element){
  //     return element.username;
  //   });
  //   userName.sort().forEach(name => {
  //     arr.push({name})
  //   }); console.log("arr",arr);
  // }
  //   );

  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   .then(response => response.json())
  //   .then(post => {
  //     let newPost = post.map(function(element){
  //       return element.userId;
  //     }) 
  //     console.log("newPost",newPost);
     
  
  //      function post_count(newPost, userId){
  //       let sum = 0;
      
  //      for(let i = 0; i < newPost.length; i++){
  //       if(newPost[i] === userId){
  //         sum++;

  //       }else{ sum = sum };
  //      } console.log("sum" , sum);
        
  //      }
  //      post_count(newPost, 4);
  //      post_count(newPost, 3);

  //   });
