const movies=require('../../client/public/movies.json');
exports.handler=async event=>{
 const id=event.path.split('/').filter(Boolean).pop();
 const data=id==='movies'?movies:movies.find(m=>String(m.id)===id);
 return {statusCode:data?200:404,headers:{'Content-Type':'application/json'},body:JSON.stringify(data||{message:'Movie not found.'})};
};
