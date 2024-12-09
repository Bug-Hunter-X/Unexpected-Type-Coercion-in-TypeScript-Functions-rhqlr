# Unexpected Type Coercion in TypeScript

This example demonstrates a potential pitfall in TypeScript related to type coercion.  While TypeScript's type system helps prevent many errors, implicit type conversions can lead to unexpected behavior if not carefully considered.  The `printNumber` function expects a number, but it accepts strings without throwing an error due to automatic type conversion. This can mask logic errors where a number is expected but a string is provided. The solution demonstrates how type guards can address this issue and improve code robustness.
