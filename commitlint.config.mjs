/**
 * Convention de messages de commit : conventional commits.
 * Format attendu : `type(scope facultatif): sujet en minuscules`
 * Types admis : build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
 *
 * @see https://www.conventionalcommits.org
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ['@commitlint/config-conventional'],
}
