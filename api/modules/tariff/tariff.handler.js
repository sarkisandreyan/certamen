import mongoose from 'mongoose'
import data from '../../../config/data'

export function getTariff(req, res){

console.log(data.length)

res.send(data[Math.floor(Math.random() * 31)])
}

