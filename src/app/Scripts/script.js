export async function updateCat(name, image, ID){
  const data = {name: name, imgUrl: image, ID: ID}
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try{
    const res = await fetch(`http://localhost:8080/updCategory`, options)
    if(res.status==200){
      console.log(res.msg)
      window.location.href = '/marketplace'
    }
  }catch(err){
    console.log(err)
  }
}
export async function updateProd(name, image, price, stock, category, description, ID){
  const data = { name, image, price, stock, category, description, ID}
  const token = localStorage.getItem('userToken')
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }
  try{
    const res = await fetch(`http://localhost:8080/updProduct`, options)
    if(res.status==200){
      console.log(res.msg)
      window.location.href = '/marketplace'
    }
  }catch(err){
    console.log(err)
  }
}