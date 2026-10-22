import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

test('read our classroom web table', async ({ page }) => {
  // Open our HTML file. No website server is needed.
  const htmlLink = pathToFileURL(resolve(__dirname, '../webtable.html')).href;
  await page.goto(htmlLink);

  // Step 1: Find the table by its caption.
  const table = page.getByRole('table', { name: 'Attendance' });

  // Step 2: Count students. tbody leaves out the heading row.
  const students = table.locator('tbody tr');
  await expect(students).toHaveCount(3);

  // Step 3: Read the first student's name. nth(0) means first cell.
  const firstName = students.first().getByRole('cell').nth(0);
  await expect(firstName).toHaveText('Ravi');
  console.log('First student:', await firstName.innerText());

  // Step 4: Find Anu's row using her name.
  const anuRow = table.getByRole('row').filter({
    has: page.getByRole('cell', { name: 'Anu', exact: true }),
  });

  // Step 5: Check the third cell. Counting starts at 0!
  await expect(anuRow.getByRole('cell').nth(2)).toHaveText('Absent');

  // Step 6: Check all three cells in Ravi's row.
  const raviRow = table.getByRole('row').filter({
    has: page.getByRole('cell', { name: 'Ravi', exact: true }),
  });
  await expect(raviRow.getByRole('cell')).toHaveText(['Ravi', '5', 'Present']);

  // Your turn: Find Sam's row and check that his status is Present.
});
