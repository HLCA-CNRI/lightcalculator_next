module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.eslint.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "import"],
  rules: {
    "prettier/prettier": [
      2,
      {
        endOfLine: "lf",
        semi: true,
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        bracketSpacing: false,
        bracketSameLine: true,
      },
    ],
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/jsx-filename-extension": [1, {extensions: [".jsx", ".tsx"]}],
    "react/destructuring-assignment": [1, "always"], // desctructure objects in props
    "react/function-component-definition": [
      2,
      {namedComponents: ["function-declaration", "arrow-function"]},
    ],
    "react/require-default-props": [1, {forbidDefaultForRequired: true}],
    "no-underscore-dangle": [2, {allowAfterThis: true, allowFunctionParams: false}],
    "import/extensions": [2, "never"],
    "no-use-before-define": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [
      1,
      {vars: "all", args: "none", ignoreRestSiblings: false},
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelAttributes: ["label"],
      },
    ],
    "@typescript-eslint/no-use-before-define": 0,
    "react/jsx-props-no-spreading": 0, // spreading 사용해도된다고 판단. --> 경호님도 mute 시키심.
    "no-nested-ternary": 0, // nested ternary 사용해도된다고 생각함 --> 경호님도 mute 시키심.
    "no-param-reassign": ["warn", {props: false}], // no-param-reassign 사용해도된다고 생각함 --> 경호님도 mute 시키심.
    "no-unused-expressions": 0,
    "no-void": ["error", {allowAsStatement: true}],
    eqeqeq: 2, // ===, !== 만 쓰기
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksConditionals: false,
        checksVoidReturn: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": [1, {ignoreVoid: true}],
    "@typescript-eslint/no-unused-expressions": [2, {allowShortCircuit: true, allowTernary: true}],
    "@typescript-eslint/restrict-plus-operands": [
      1,
      {checkCompoundAssignments: true, allowAny: true},
    ],
    "consistent-return": 0, // return () => clearInterval(interval);useEffect쓸때 clearInterval 해서 타이머 다시 맞쳐야함.
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
    "no-explicit-any": 0, // @typescript-eslint/no-explicit-any 사용을 위해 off
    // 이하 항목들은 평소에는 "off", 급한 불 다 껐으면 "warn"으로 하여 코드 정리해보기
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-var-requires": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "@types"],
      },
      typescript: {}, // 프로젝트 Root의 tsconfig.json을 찾는다.
    },
  },
};
