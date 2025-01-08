# Type Error in TypeScript
This repository demonstrates a common type error in TypeScript where a string is passed to a function expecting a number.  The solution shows how to use type guards or type assertions to resolve the issue.

## Bug
The `bug.ts` file contains a function `add` that expects two number arguments.  However, it is called with a string '10' as the second argument, resulting in a type error.

## Solution
The `bugSolution.ts` file demonstrates two solutions:

1. Type Guard: checks the type of the input before performing the operation. 
2. Type Assertion: asserts that the input is a number and the compiler trusts you (use with caution).