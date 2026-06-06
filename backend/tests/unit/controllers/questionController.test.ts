// backend/tests/unit/controllers/questionController.test.ts
/// <reference types="jest" />
// Provide minimal ambient declarations to satisfy TypeScript in this test file
declare const describe: any;
declare const it: any;
declare const beforeEach: any;
declare const expect: any;
declare const jest: any;
import { questionController } from '../../../src/controllers/questionController';
import { questionService } from '../../../src/services/questionService';

jest.mock('../../../src/services/questionService');

describe('questionController', () => {
  let req: any, res: any, next: jest.Mock;
  beforeEach(() => {
    req = createRequest();
    res = createResponse();
    next = jest.fn();
  });

  it('getAll should return questions', async () => {
    (questionService.getAllQuestions as jest.Mock).mockResolvedValue([{ id: '1' }]);
    await questionController.getAll(req, res, next);
    expect(res._getJSONData()).toEqual([{ id: '1' }]);
  });

  it('getById should return 404 if not found', async () => {
    (questionService.getQuestionById as jest.Mock).mockRejectedValue({ statusCode: 404, message: 'Not found' });
    req.params = { id: 'missing' };
    await questionController.getById(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});