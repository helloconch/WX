const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const calcStock=(v,rate)=>{
  return Math.round(v * rate * 100) / 100
}

const calcRateDescription=(v1,v2)=>{
  if(v1==v2){
    return "A->B未产生趋势"
  }
  if((v1-v2)>0){
    return "A->B处于下降趋势【各回撤百分比为阻力位】"
  }else{
    return "A->B处于上升趋势【各回撤百分比为支撑位】"
  }
}

const calcRate=(v1,v2,r)=>{
  const v=Math.abs(v1-v2)
  const vRate=v*r
  if(v1==v2)
  return 0
  if ((v1 - v2) > 0)
    return Math.round((Math.min(v1,v2)+vRate)*100)/100
  else
    return Math.round((Math.max(v1, v2) - vRate) * 100) / 100
}


const calcReduceRate=(v1,r)=>{
  return Math.round(v1*(1-r) * 100) / 100
}

module.exports = {
  formatTime: formatTime,
  calcStock: calcStock,
  calcRateDescription: calcRateDescription,
  calcRate: calcRate,
  calcReduceRate: calcReduceRate,
}
