import { notFound } from "@hapi/boom";
import { ReportModel } from "../models/reports";
import { UserModel } from "../models/user";
import { findByMunicipality } from "./reports.service";

export async function myReports(userId: string){
    const reports = await ReportModel.find({ reportedBy: userId })
    return reports
}

export async function reportsInMyArea(userId: string){
    const user = await UserModel.findById(userId)
    if(!user) throw notFound("Usuario no encontrado")
    const reports = await ReportModel.find({location:{municipality: user.location.municipality}})
    return reports
}

export async function myProfile(userId: string){
    const user = await UserModel.findById(userId)
    if(!user) throw notFound("Usuario no encontrado")
    return user
}