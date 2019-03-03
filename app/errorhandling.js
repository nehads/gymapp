
// setup global middleware here
class ErrorHandling {
    // initiallize all middleware and bind it to  application
    init(app) {
        this.app = app;
        this.errorHandling();
    }

    errorHandling()
    {
        //Error Handling File Not found
        this.app.use((req, res, next) => {

            res.status(404).json({
            'error':
                {
                    'message': 'File Not Found'
                }
            });

        });

        //Error Handling for all functions
        this.app.use((error, req, res, next) => {

            res.status(error.status || 500);
            res.json({
                'error':
                {
                    'message': error.message
                }
            });
        });
    }

}

module.exports = new ErrorHandling();