// Regression test for sync logic failure
test('sync does not run twice', () => {
    expect(concurrentSyncs()).toBe(1);
});
