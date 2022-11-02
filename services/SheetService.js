const {google} = require("googleapis");

class SheetService{
    async addSurvey(data){
        const {
            question_1,
            question_2,
            question_3,
            question_4,
            question_5,
            first_name,
            last_name,
            email,
            question_7,
            question_8,
        } = data;

        const {keyFile, spreadsheetId} = process.env;

        const auth = new google.auth.GoogleAuth({
            keyFile,
            scopes: "https://www.googleapis.com/auth/spreadsheets",
        });

        const sheets = google.sheets({ version: "v4", auth });

        await sheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "Sheet1!A:B",
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        question_1,
                        question_2,
                        question_3,
                        question_4,
                        question_5,
                        first_name,
                        last_name,
                        email,
                        question_7,
                        question_8,
                    ],
                ],
            },
        });

        return 'Success';
    }
}

module.exports = new SheetService()