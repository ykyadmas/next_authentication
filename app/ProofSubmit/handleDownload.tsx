"use client"
import React from 'react';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

interface DownloadProps {
    display: any; // Adjust the type according to your data structure
}

const DownloadButton = ({ display }: DownloadProps) => {
    const handleDownload = () => {
        // eslint-disable-next-line new-cap
        const doc = new jsPDF();
        autoTable(doc, {
            head: [['ID', 'FirstName', 'LastName','Amount','Kebele', 'Woreda', 'Branch', 'StartDate', 'CreatedAt']],
            body: [[
                display.id,
                display.firstName,
                display.lastName,
                display.amount,
                display.proposal.kebele,
                display.proposal.woreda,
                display.proposal.branch,
                display.proposal.startDate,
                display.proposal.createdAt.toDateString()
            ]]
        });
        doc.save("YourInsurance.pdf");
    };

    return (
        <button className='btn btn-primary' onClick={handleDownload}>Download Your Insurance as PDF</button>
    );
};

export default DownloadButton;
