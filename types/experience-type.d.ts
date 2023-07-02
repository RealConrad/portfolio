interface WorkExperience {
	companyName: string;
	jobTitle: string;
	startMonth: string;
	endMonth: string;
	startMonthShort: string;
	endMonthShort: string;
	startYear: string;
	endYear: string;
	isLeftSide: boolean;
	workDescription: string[];
}

type ExperienceData = WorkExperience[];
