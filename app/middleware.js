const morgan =  require('morgan');
const bodyparser = require('body-parser');


// setup global middleware here
class Middleware {
    // initiallize all middleware and bind it to  application
    init(app) {
        this.app = app;
        this.morgan();
        this.bodyParser();
        this.cors();
    }

    //Add logs to console & Restart on change
    morgan() {
        this.app.use(morgan('dev'));
    }

    // Parse incoming request data
    bodyParser() {
        this.app.use(bodyparser.urlencoded({extended:false}));
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.raw());
        this.app.use(bodyparser.text());
    }

    cors()
    {
        //Add CORS
        this.app.use((req, res, next) => {

            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*");
            
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', '*');
                return res.status(200).json({});
            }
            next();
        });
    }

}

module.exports = new Middleware();