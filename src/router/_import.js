module.exports = file => () => require('@/page/' + file + '.vue')



//  function(file){
//     function(){
//         import('@/page/' + file + '.vue')
//     }
// }