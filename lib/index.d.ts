declare const compile: Compile;
export default compile;
interface Compile {
    (arg: {
        callback: Function;
        webpack: any;
        webpackBuildPath: string;
        webpackConfigPath: string;
        webpackStats?: any;
    }): void;
}
