export function cn(
    ...classes: Array<string | boolean | null | undefined>
): string {
    return classes.filter((cls): cls is string => Boolean(cls)).join(" ");
}
