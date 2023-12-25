import enhance from "@cloudedots/enhanced-express";
import bodyParser from "body-parser";
import { log } from "console";
import { Application } from "express";

export const useBodyParser = (expressInstance: Application) => {
	expressInstance.use(
		bodyParser.urlencoded({
			extended: true
		})
	);
	expressInstance.use(
		bodyParser.json({
			limit: '100mb'
		})
	);
};

export const useEnhancedExpress = (expressInstance: Application) => {
	expressInstance.use(
		enhance({
			logger: log
		})
	);
	
};