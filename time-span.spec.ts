import { TimeSpan } from "./time-span";
describe("Suite for testing the TimeSpan class", () => {
    describe("When a new TimeSpan created from 10 seconds", () => {
        it("should have a total of 10 seconds", (() => {
            const ts = TimeSpan.fromSeconds(10);
            expect(ts.totalSeconds).toBe(10);
        }));
        it("should have a total of 10000 milliseconds", (() => {
            const ts = TimeSpan.fromSeconds(10);
            expect(ts.totalMilliseconds).toBe(10000);
        }));
    });
    describe("When a new TimeSpan created with minValue", () => {
        it("should be a total milliseconds of the MIN_SAFE_INTEGER constant", (() => {
            const ts = TimeSpan.minValue;
            expect(ts.totalMilliseconds).toBe(Number.MIN_SAFE_INTEGER);
        }));
    });
    describe("When a new TimeSpan created with maxValue", () => {
        it("should be a total milliseconds of the MAX_SAFE_INTEGER constant", (() => {
            const ts = TimeSpan.maxValue;
            expect(ts.totalMilliseconds).toBe(Number.MAX_SAFE_INTEGER);
        }));
    });
    describe("When a new TimeSpan from 3600 seconds", () => {
        it("should be one hour and 0 seconds", (() => {
            const ts = TimeSpan.fromSeconds(3600);
            expect(ts.hours).toBe(1);
            expect(ts.seconds).toBe(0);
        }));
    });
    describe("When a new TimeSpan from -100 seconds", () => {
        it("should be a total of minutes -1.6666666666666667", (() => {
            const ts = TimeSpan.fromSeconds(-100);
            const expected = -1.6666666666666667;
            expect(ts.totalMinutes).toBe(expected);
        }));
        it("should be -1 minute and -40 seconds", (() => {
            const ts = TimeSpan.fromSeconds(-100);
            expect(ts.minutes).toBe(-1);
            expect(ts.seconds).toBe(-40);
        }));
    });
    describe("When a new TimeSpan from 90061001 milliseconds", () => {
        it("should be 1 day, 1 hour, 1 minute, 1 second and 1 millisecond", (() => {
            const ts = new TimeSpan(90061001);
            expect(ts.days).toBe(1);            // 86400000
            expect(ts.hours).toBe(1);           //  3600000
            expect(ts.minutes).toBe(1);         //    60000
            expect(ts.seconds).toBe(1);         //     1000
            expect(ts.milliseconds).toBe(1);    //        1
        }));
    });
    describe("When a new TimeSpan from -90061001 milliseconds", () => {
        it("should be -1 day, -1 hour, -1 minute, -1 second and -1 millisecond", (() => {
            const ts = new TimeSpan(-90061001);
            expect(ts.days).toBe(-1);            // 86400000
            expect(ts.hours).toBe(-1);           //  3600000
            expect(ts.minutes).toBe(-1);         //    60000
            expect(ts.seconds).toBe(-1);         //     1000
            expect(ts.milliseconds).toBe(-1);    //        1
        }));
    });
    describe("When substracting one day from a TimeSpan from 90061001 milliseconds", () => {
        it("should be 1 hour, 1 minute, 1 second and 1 millisecond", (() => {
            const ts1 = new TimeSpan(90061001);
            const ts2 = TimeSpan.fromDays(1);
            const ts = ts1.subtract(ts2);
            expect(ts.days).toBe(0);
            expect(ts.hours).toBe(1);
            expect(ts.minutes).toBe(1);
            expect(ts.seconds).toBe(1);
            expect(ts.milliseconds).toBe(1);
        }));
    });
    describe("When adding 1 hour to a TimeSpan from 90061001 milliseconds", () => {
        it("should be 1 day, 2 hours, 1 minute, 1 second and 1 millisecond", (() => {
            const ts1 = new TimeSpan(90061001);
            const ts2 = TimeSpan.fromHours(1);
            const ts = ts1.add(ts2);
            expect(ts.days).toBe(1);
            expect(ts.hours).toBe(2);
            expect(ts.minutes).toBe(1);
            expect(ts.seconds).toBe(1);
            expect(ts.milliseconds).toBe(1);
        }));
    });
    describe("When create a TimeSpan from Time of 1 hour, 1 minute and 1 second ", () => {
        it("should be 0 days, 1 hour, 1 minute, 1 second, 0 milliseconds and a total milliseconds of 3661000", (() => {
            const ts = TimeSpan.fromTime(1, 1, 1);
            expect(ts.days).toBe(0);
            expect(ts.hours).toBe(1);
            expect(ts.minutes).toBe(1);
            expect(ts.seconds).toBe(1);
            expect(ts.milliseconds).toBe(0);
            expect(ts.totalMilliseconds).toBe(3661000);
        }));
    });
    describe("When create a TimeSpan from Time of 1 day, 1 hour, 1 minute and 1 second and 1 millisecond ", () => {
        it("should be 1 day, 1 hour, 1 minute, 1 second, 0 milliseconds and a total milliseconds of 90061001", (() => {
            const ts = TimeSpan.fromTime2(1, 1, 1, 1, 1);
            expect(ts.days).toBe(1);
            expect(ts.hours).toBe(1);
            expect(ts.minutes).toBe(1);
            expect(ts.seconds).toBe(1);
            expect(ts.milliseconds).toBe(1);
            expect(ts.totalDays).toBe(1.0423726967592593);
            expect(ts.totalHours).toBe(25.016944722222224);
            expect(ts.totalMinutes).toBe(1501.0166833333333);
            expect(ts.totalSeconds).toBe(90061.001);
            expect(ts.totalMilliseconds).toBe(90061001);
        }));
    });
});
