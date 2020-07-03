<?php
mb_language('ja');
mb_internal_encoding('UTF-8');

if($salon ==="銀座店"){
  // $mailTo = "ginza@zelmo.jp";
  $mailTo = "tamaru.ytzbr1@gmail.com";
  $fromBack = "From:".mb_encode_mimeheader("メンズ脱毛サロン ZELMO/ゼルモ 銀座店")."<ginza@zelmo.jp>";
  $salonTel ="03-6260-6075";
  $salonAdd ="東京都中央区銀座2-13-13 久保ビル2F";
  $cookieSalon = "gz";
}else{
  // $mailTo = "info@zelmo.jp";
  $mailTo = "tamaru.ytzbr1@gmail.com";
  $fromBack = "From:".mb_encode_mimeheader("メンズ脱毛サロン ZELMO/ゼルモ 恵比寿店")."<info@zelmo.jp>";
  $salonTel ="03-6455-2871";
  $salonAdd ="東京都渋谷区恵比寿西1-7-13 スイングビル4F";
  $cookieSalon = "eb";
}

$mailBack = $emailadd;
$subject = "VIO脱毛(Sパーツ)特別体験予約";
$from = "From:".$emailadd;

//送信メッセージ
$message = <<< EOD
以下の内容が、VIO/Sパーツ脱毛特別体験予約フォームより送信されました。
────────────────────────────────────
[ご予約名]
$custmername

[メールアドレス]
$emailadd

[ご利用店舗]
$salon

[第1希望日時]
$firstdate

[第1希望日時]
$seconddate

[お電話番号]
$phone

────────────────────────────────────
EOD;

$messageback = <<< EOD
この度は、ZELMOの特別体験キャンペーンにご予約を頂き、
誠にありがとうございます。

これは自動返信メールです。
まだご予約は成立しておりません。
当店より確認の返信が届いた時点でご予約が成立となります。
担当者より、改めてご連絡させて頂きますので、
今しばらくお待ちください。

なお、お客様のプライバシー保護のため、
自動返信メールにはお客様の入力情報は記載しておりません。

この度はお問い合わせ重ねてお礼申し上げます。


────────────────────────────────────

このメールに心当たりの無い場合は、お手数ですが
下記連絡先までお問い合わせください。

────────────────────────────────────

ゼルモ / ZELMO {$salon}
　{$salonAdd}
　TEL / {$salonTel}
　【平　日】12:00～21:00（最終受付 20:30）
　【土日祝】10:00～19:00（最終受付 18:30）
　https://zelmo.jp/

EOD;

$message = mb_convert_encoding($message , "ISO-2022-JP", "auto");

$messageback = mb_convert_encoding($messageback , "ISO-2022-JP", "auto");

?>
