const timeGap = (revisionDate) => {
	const timeNow = Date.now();

	const difference = Math.floor(timeNow / 1000) - Math.floor(revisionDate / 1000) + 24500;

	const minDifference = Math.floor(difference / 60);

	return minDifference;
};

module.exports = timeGap;
