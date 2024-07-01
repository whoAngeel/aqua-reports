import { checkJWT } from './../middlewares/auth.handler';
import { IReport } from "../interfaces/report.type";
import { ReportModel } from '../models/reports';
import { notFound } from '@hapi/boom';

export async function create(report: IReport) {
    const newReport = await ReportModel.create({
        ...report,
        history: [{ description: 'Se ha creado el reporte', date: new Date() }]
    })
    return newReport
}

export async function findAll() {
    const reports = await ReportModel.find()
    return reports
}

export async function findById(id: string) {
    const report = await ReportModel.findById(id)
    if (!report) throw notFound()
    return report
}

export async function updateStatus(id: string, status: 'pending' | 'resolved' | 'rejected' | 'false' | 'closed' | 'cannot be resolved', description: string) {
    const report = await findById(id)
    report.status = status
    if (report.history) {
        report.history.push({ description, date: new Date() });
    }
    else report.history = [{ description, date: new Date() }]

    await report.save()
    return report
}

export async function updateReport(id: string, reportData: Partial<IReport>, description: string) {
    const report = await ReportModel.findByIdAndUpdate(id,reportData, {new: true})  
    if (!report) throw notFound()
    if (report.history) {
        report.history.push({ description, date: new Date() });
    }
    else report.history = [{ description, date: new Date() }]
    await report.save()
    return report
}

export async function findByMunicipality(municipality: string) {
    const reports = await ReportModel.find({ location: { municipality } })
    return reports
}

export async function findByState(state: string) {
    const reports = await ReportModel.find({ location: { state } })
    return reports
}