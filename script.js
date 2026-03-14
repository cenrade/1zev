const _0x591ce0 = _0x5628;
function _0x5628(_0x4c8801, _0x489806) {
  _0x4c8801 = _0x4c8801 - 0x126;
  const _0x3e08c3 = _0x3e08();
  let _0x562891 = _0x3e08c3[_0x4c8801];
  return _0x562891;
}
(function (_0x1f0f88, _0x27d6ed) {
  const _0x194b6d = _0x5628,
    _0x176ec6 = _0x1f0f88();
  while (!![]) {
    try {
      const _0xcbaf0f =
        parseInt(_0x194b6d(0x13b)) / 0x1 +
        parseInt(_0x194b6d(0x145)) / 0x2 +
        (parseInt(_0x194b6d(0x13d)) / 0x3) *
          (parseInt(_0x194b6d(0x133)) / 0x4) +
        -parseInt(_0x194b6d(0x128)) / 0x5 +
        -parseInt(_0x194b6d(0x13f)) / 0x6 +
        -parseInt(_0x194b6d(0x12a)) / 0x7 +
        (parseInt(_0x194b6d(0x144)) / 0x8) *
          (-parseInt(_0x194b6d(0x140)) / 0x9);
      if (_0xcbaf0f === _0x27d6ed) break;
      else _0x176ec6["push"](_0x176ec6["shift"]());
    } catch (_0x3e36cf) {
      _0x176ec6["push"](_0x176ec6["shift"]());
    }
  }
})(_0x3e08, 0x51099);
const passInput = document["getElementById"]("passInput");
function _0x3e08() {
  const _0x5a8d5e = [
    "style",
    "value",
    "308240JxyZhF",
    "block",
    "Backspace",
    "key",
    "modalTo",
    "modalBody",
    "preventDefault",
    "whiteSpace",
    "647183BWFEdy",
    "addEventListener",
    "24kHpKgB",
    "error-msg",
    "612936FDrquf",
    "40518lodffj",
    "includes",
    "onclick",
    "target",
    "1048GcjnHy",
    "159210racqrs",
    "Tab",
    "getElementById",
    "none",
    "Delete",
    "253070sBYhxT",
    "Escape",
    "1881649SBLXQu",
    "messageModal",
    "display",
    "innerText",
    "archive.html",
    "pre-wrap",
    "210218",
  ];
  _0x3e08 = function () {
    return _0x5a8d5e;
  };
  return _0x3e08();
}
passInput &&
  passInput[_0x591ce0(0x13c)]("keydown", (_0x850608) => {
    const _0x13a348 = _0x591ce0,
      _0xdb9c77 = [
        _0x13a348(0x135),
        _0x13a348(0x127),
        _0x13a348(0x146),
        _0x13a348(0x129),
        "Enter",
      ],
      _0x5a5332 =
        _0x850608[_0x13a348(0x136)] >= "0" &&
        _0x850608[_0x13a348(0x136)] <= "9";
    if (_0xdb9c77[_0x13a348(0x141)](_0x850608["key"]) || _0x5a5332) return;
    _0x850608[_0x13a348(0x139)]();
  });
function checkPass() {
  const _0x1a6315 = _0x591ce0,
    _0xab3af2 = document[_0x1a6315(0x147)]("passInput")[_0x1a6315(0x132)];
  _0xab3af2 === _0x1a6315(0x130)
    ? (window["location"]["href"] = _0x1a6315(0x12e))
    : (document["getElementById"](_0x1a6315(0x13e))[_0x1a6315(0x131)][
        _0x1a6315(0x12c)
      ] = _0x1a6315(0x134));
} //The password is in ur notes:)
function openCard(_0x3e45b5, _0x168fda) {
  const _0x1b0b00 = _0x591ce0,
    _0x4bbdb6 = document[_0x1b0b00(0x147)]("messageModal"),
    _0x52029c = document[_0x1b0b00(0x147)](_0x1b0b00(0x137)),
    _0x3e6bef = document["getElementById"](_0x1b0b00(0x138));
  ((_0x52029c[_0x1b0b00(0x12d)] = "TO:\x20" + _0x3e45b5),
    (_0x3e6bef[_0x1b0b00(0x12d)] = _0x168fda),
    (_0x3e6bef[_0x1b0b00(0x131)][_0x1b0b00(0x13a)] = _0x1b0b00(0x12f)),
    (_0x4bbdb6[_0x1b0b00(0x131)][_0x1b0b00(0x12c)] = _0x1b0b00(0x134)));
}
function closeModal() {
  const _0xbbb9bf = _0x591ce0,
    _0x2b2c2c = document[_0xbbb9bf(0x147)]("messageModal");
  _0x2b2c2c["style"][_0xbbb9bf(0x12c)] = _0xbbb9bf(0x126);
}
window[_0x591ce0(0x142)] = function (_0x59b2a9) {
  const _0x306ffd = _0x591ce0,
    _0x59d0ac = document["getElementById"](_0x306ffd(0x12b));
  _0x59b2a9[_0x306ffd(0x143)] === _0x59d0ac && closeModal();
};
